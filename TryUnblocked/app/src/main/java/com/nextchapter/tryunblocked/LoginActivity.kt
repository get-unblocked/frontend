import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import androidx.appcompat.app.AppCompatActivity
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import java.net.HttpURLConnection
import java.net.URL

class LoginActivity : AppCompatActivity() {
    private lateinit var usernameEditText: EditText
    private lateinit var passwordEditText: EditText
    private lateinit var loginButton: Button

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        usernameEditText = findViewById(R.id.username_edit_text)
        passwordEditText = findViewById(R.id.password_edit_text)
        loginButton = findViewById(R.id.login_button)

        loginButton.setOnClickListener {
            val username = usernameEditText.text.toString()
            val password = passwordEditText.text.toString()

            GlobalScope.launch(Dispatchers.IO) {
                val url = URL("https://tryunblocked.com/auth")
                val connection = url.openConnection() as HttpURLConnection
                connection.requestMethod = "POST"
                connection.setRequestProperty("Content-Type", "application/json")

                val body = "{\"username\":\"$username\",\"password\":\"$password\"}"
                connection.doOutput = true
                connection.outputStream.write(body.toByteArray())

                val responseCode = connection.responseCode
                if (responseCode == HttpURLConnection.HTTP_OK) {
                    val cookies = connection.headerFields["Set-Cookie"]
                    if (cookies != null) {
                        val authCookie = cookies.find { it.startsWith("auth=") }
                        if (authCookie != null) {
                            withContext(Dispatchers.Main) {
                                // Set the auth cookie and navigate to the home screen
                                // Navigate to the home screen
                            }
                        }
                    }
                } else {
                    withContext(Dispatchers.Main) {
                        // Show an error message
                    }
                }
            }
        }
    }
}