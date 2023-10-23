import SwiftUI

@main
struct TryUnblockedApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView(items: <#[Item]#>)
                .modelContainer(for: Item.self, inMemory: true)
        }
    }
}

struct ContentView: View {
    @Environment(\.modelContext) private var modelContext
    @Query private var items: [Item]

    var body: some View {
        TabView {
            // First Tab (Existing ContentView)
            NavigationView {
                List {
                    ForEach(items) { item in
                        NavigationLink {
                            Text("Item at \(item.timestamp, format: Date.FormatStyle(date: .numeric, time: .standard))")
                        } label: {
                            Text(item.timestamp, format: Date.FormatStyle(date: .numeric, time: .standard))
                        }
                    }
                    .onDelete(perform: deleteItems)
                }
                .toolbar {
                    ToolbarItem(placement: .navigationBarTrailing) {
                        EditButton()
                    }
                    ToolbarItem {
                        Button(action: addItem) {
                            Label("Add Item", systemImage: "plus")
                        }
                    }
                }
            }
            .tabItem {
                Label("Items", systemImage: "list.bullet")
            }

            // Second Tab (LoginView)
            LoginView()
                .tabItem {
                    Label("Login", systemImage: "person.crop.circle")
                }

            // Third Tab (NotificationView)
            NotificationView()
                .tabItem {
                    Label("Notifications", systemImage: "bell")
                }
        }
    }

    private func addItem() {
        withAnimation {
            let newItem = Item(timestamp: Date())
            modelContext.insert(newItem)
        }
    }

    private func deleteItems(offsets: IndexSet) {
        withAnimation {
            for index in offsets {
                modelContext.delete(items[index])
            }
        }
    }
    
    #Preview {
        ContentView()
            .modelContainer(for: Item.self, inMemory: true)
    }

}

