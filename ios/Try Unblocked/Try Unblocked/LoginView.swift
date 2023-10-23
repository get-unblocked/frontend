import SwiftUI

struct LoginView: View {
    @State private var username = ""
    @State private var password = ""
    @State private var showError = false

    var body: some View {
        VStack {
            Text("Login")
                .font(.largeTitle)
                .padding()

            TextField("Username", text: $username)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(5.0)
                .padding(.bottom, 20)

            SecureField("Password", text: $password)
                .padding()
                .background(Color.gray.opacity(0.2))
                .cornerRadius(5.0)
                .padding(.bottom, 20)

            Button(action: {
                let url = URL(string: "https://tryunblocked.com/auth")!
                var request = URLRequest(url: url)
                request.httpMethod = "POST"
                request.setValue("application/json", forHTTPHeaderField: "Content-Type")

                let body = ["username": username, "password": password]
                let jsonData = try! JSONSerialization.data(withJSONObject: body, options: [])

                request.httpBody = jsonData

                URLSession.shared.dataTask(with: request) { data, response, error in
                    if let data = data, let response = response as? HTTPURLResponse, response.statusCode == 200 {
                        DispatchQueue.main.async {
                            // Set the auth cookie and navigate to the home screen
                            let cookies = HTTPCookie.cookies(withResponseHeaderFields: response.allHeaderFields as! [String : String], for: url)
                            let authCookie = cookies.first(where: { $0.name == "auth" })
                            if let authCookie = authCookie {
                                HTTPCookieStorage.shared.setCookie(authCookie)
                                // Navigate to the home screen
                            } else {
                                showError = true
                            }
                        }
                    } else {
                        DispatchQueue.main.async {
                            showError = true
                        }
                    }
                }.resume()
            }) {
                Text("Login")
                    .font(.headline)
                    .foregroundColor(.white)
                    .padding()
                    .frame(width: 220, height: 60)
                    .background(Color.blue)
                    .cornerRadius(15.0)
            }
            .alert(isPresented: $showError) {
                Alert(title: Text("Error"), message: Text("Invalid username or password"), dismissButton: .default(Text("OK")))
            }
        }
        .padding()
    }

    #Preview {
    LoginView()
    }

}



