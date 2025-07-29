"""Last In First Out (LIFO) - Stack"""
# stack = []


# stack.append(12) #Push
# stack.append(14) #Push
# stack.append(16) #Push

# print("Stack after pushes:", stack)

# stack.pop()  # Pop

# print("Stack after pop:", stack)


# First In First Out (FIFO) - Queue
from collections import deque

queue = deque()

# Adding item to the end of the queue (enqueue)
queue.append(23)
queue.append(25)
queue.append(27)

print("Queue after enqueues:", queue)

# Removing item from the front of the queue (dequeue)
queue.popleft()

print("Queue after dequeue:", queue)
