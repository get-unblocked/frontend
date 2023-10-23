//
//  Item.swift
//  Try Unblocked
//
//  Created by cancelself on 10/22/23.
//

import Foundation
import SwiftData

@Model
final class Item {
    var timestamp: Date
    
    init(timestamp: Date) {
        self.timestamp = timestamp
    }
}
