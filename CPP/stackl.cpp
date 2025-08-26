#include <iostream>
using namespace std;
struct node
{
    int data;
    node *next;
};
class stack
{
public:
    node *top;
    stack()
    {
        top = NULL;
    }
    bool isEmpty()
    {
        return top == NULL;
    }
    bool isFull()
    {
        return false;
    }
    void push(int val)
    {
        node *newNode = new node();
        newNode->data = val;
        newNode->next = top;
        top = newNode;
    }
    void pop(int &val)
    {
        if (isEmpty())
        {
            cout << "Stack Underflow" << endl;
        }
        else
        {
            val = top->data;
            node *temp = top->next;
            delete top;
            top = temp;
        }
    }
    void peek(int &val)
    {
        if (isEmpty())
        {
            cout << "Stack Underflow" << endl;
        }
        else
            val = top->data;
    }
    void display()
    {
        if (isEmpty())
        {

            cout << "Stack is empty" << endl;
        }

        else
        {

            node *current = top;
            while (current != NULL)
            {
                cout << current->data << " ";
                current = current->next;
            }
            cout << endl;
        }
    }
};

int main()
{
    stack s;
    int val;
    s.push(100);
    s.push(200);
    s.push(300);
    s.push(400);
    s.push(500);
    s.display();
    s.peek(val);
    cout << "Top item is " << val << endl;
    s.pop(val);
    cout << "Popped item is " << val << endl;
    s.display();
    return 0;
}