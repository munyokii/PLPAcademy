"""Linked List Implementation"""

# Node holds:
# - Data = value
# - Next = pointer to the next node
# - Previous = pointer to the previous node (not used in singly linked list)

class Node:
    """Singly Linked List"""
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    """Singly Linked List"""
    def __init__(self):
        self.head = None

    def insert_in_list(self, data):
        """Insert a new node at the beginning of the list"""
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def display_list(self):
        """Print the linked list"""
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

if __name__ == "__main__":
    ll = LinkedList()
    ll.insert_in_list(10)
    ll.insert_in_list(20)
    ll.insert_in_list(30)

    ll.display_list()


# Doubly LinkedList
class DNone:
    """Doubly Linked List"""
