package kursach.system.repository

import kursach.system.annotation.Procedures
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.transactions.TransactionManager
import org.jetbrains.exposed.sql.transactions.transaction
import org.slf4j.LoggerFactory
import org.springframework.stereotype.Repository
import java.sql.ResultSet

@Repository
class Query() {

    companion object{
        val log = LoggerFactory.getLogger(Query::class.java)
        val walker = StackWalker.getInstance()
    }

    init {
        Database.connect("jdbc:mysql://localhost:3306",
            driver = "com.mysql.cj.jdbc.Driver",
            user = "admin",
            password = "")
    }

    @Procedures("call authorisation_user(?, ?)")
    fun authorisation(login: String, password: String): Boolean{
        val methodName = walker.walk {
                frames -> frames.findFirst().map(StackWalker.StackFrame::getMethodName)
        }.get()
        val pr = getProcedure(methodName, String::class.java, String::class.java)
        val query = prepareQuery(pr, login, password)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getBoolean("result")
            }
        }
        return result[0]
    }

    @Procedures("select * from users where Login=?")
    fun getUser(login: String){
        val methodName = walker.walk {
            frames -> frames.findFirst().map(StackWalker.StackFrame::getMethodName)
        }.get()
        val pr = getProcedure(methodName, String::class.java)
        val query = prepareQuery(pr, login)
        log.info(pr)
        log.info(query)
        val result = transaction {
            query.execAndMap { rs ->
                rs.getString("Password")
            }
        }
        log.info(result.toString())
    }

    @Procedures("select * from game")
    fun getGame(){
        val methodName = walker.walk {
            frames -> frames.findFirst().map(StackWalker.StackFrame::getMethodName)
        }.get()
        val pr = getProcedure(methodName)
        val query = prepareQuery(pr)
        log.info(pr)
        log.info(query)
        transaction {

        }
    }

    private fun getProcedure(methodName: String, vararg parameterTypes: Class<*>): String {
        val m = this::class.java.getDeclaredMethod(methodName, *parameterTypes)
        val procedures = m.getAnnotation(Procedures::class.java)
        val pr = procedures.procedure
        return pr
    }

    private fun prepareQuery(procedure: String, vararg arguments: String): String {
        var result = procedure

        for (argument in arguments){
            result = result.replaceFirst("?", "'$argument'")
        }

        return result
    }

    private fun <T:Any> String.execAndMap(transform : (ResultSet) -> T) : List<T> {
        val result = arrayListOf<T>()
        TransactionManager.current().exec(this) { rs ->
            while (rs.next()) {
                result += transform(rs)
            }
        }
        return result
    }
}