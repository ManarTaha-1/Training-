#include <iostream>
using namespace std;
struct Node {
    int data;
    Node* next;
};

class Queue {
private:
    Node* frontNode;
    Node* rearNode;

public:
    Queue() {
        frontNode = rearNode = nullptr;
    }

    bool isEmpty() {
        return frontNode == nullptr;
    }

    void enqueue(int val) {
        Node* newNode = new Node{val, nullptr};
        if (rearNode == nullptr) {
            frontNode = rearNode = newNode;
        } else {
            rearNode->next = newNode;
            rearNode = newNode;
        }
    }

    void dequeue() {
        if (frontNode != nullptr) {
            Node* temp = frontNode;
            frontNode = frontNode->next;
            if (frontNode == nullptr) {
                rearNode = nullptr;
            }
            delete temp;
        }
    }

    int front() {
        if (frontNode != nullptr)
            return frontNode->data;
        return -1;
    }

    void printQueue() {
        Node* temp = frontNode;
        while (temp != nullptr) {
            cout << temp->data << " ";
            temp = temp->next;
        }
        cout << endl;
    }
};

void moveOddsToBack(Queue& q) {
    Queue evenQueue, oddQueue;

    while (!q.isEmpty()) {
        int val = q.front();
        q.dequeue();

        if (val % 2 == 0)
            evenQueue.enqueue(val);
        else
            oddQueue.enqueue(val);
    }

    while (!evenQueue.isEmpty()) {
        q.enqueue(evenQueue.front());
        evenQueue.dequeue();
    }

    while (!oddQueue.isEmpty()) {
        q.enqueue(oddQueue.front());
        oddQueue.dequeue();
    }
}

int main() {
    Queue q;
    q.enqueue(4);
    q.enqueue(7);
    q.enqueue(2);
    q.enqueue(9);
    q.enqueue(6);
    q.enqueue(1);
    q.enqueue(3);

    cout << "Before: ";
    q.printQueue();

    moveOddsToBack(q);

    cout << "After:  ";
    q.printQueue();

    return 0;
}

