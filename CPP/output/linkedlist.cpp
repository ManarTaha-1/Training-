#include <iostream>
using namespace std;
class Node
{
public:
    Node *next;
    int data;
};
class linkedlist
{
public:
    Node *Head;
    linkedlist()
    {
        Head = NULL;
    }
    bool isempty()
    {
        return (Head == NULL);
    }
    void insertfirst(int newvalue)
    {
        Node *newnode = new Node;
        newnode->data = newvalue;
        if (isempty())
        {
            newnode->next = NULL;
            Head = newnode;
        }
        else
        {
            newnode->next = Head;
            Head = newnode;
        }
    }
    void display()
    {
        Node *temp = Head;
        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
    }
    int count()
    {
        int counter = 0;
        Node *temp = Head;
        while (temp != NULL)
        {
            temp = temp->next;
            counter++;
        }
        return counter;
    }
    bool found(int key)
    {
        Node *temp = Head;
        bool isfound;
        while (temp != NULL)
        {
            if (temp->data == key)
            {
                isfound = true;
                break;
            }
            else
            {
                isfound = false;
            }
            temp = temp->next;
        }
        return isfound;
    }
    void insertbefore(int item, int newvalue)
    {
        if (found(item))
        {
            Node *newnode = new Node;
            newnode->data = newvalue;
            Node *temp = Head;
            while (temp != NULL && temp->next->data != item)
            {
                temp = temp->next;
            }
            newnode->next = temp->next;
            temp->next = newnode;
        }
        else
        {
            cout << "Sorry, item is not found" << endl;
        }
    }
    void append(int newvalue)
    {
        if (isempty())
        {
            insertfirst(newvalue);
        }
        else
        {
            Node *temp = Head;
            Node *newnode = new Node;
            newnode->data = newvalue;
            while (temp->next != NULL)
            {
                temp = temp->next;
            }
            temp->next = newnode;
            newnode->next = NULL;
        }
    }
};

int main()
{
    linkedlist list;
    if (list.isempty())
    {
        cout << "list is empty" << endl;
    }
    else
    {
        cout << "Number of nodes is " << list.count();
    }
    int item;
    cout << "Enter items to inert in the list" << endl;
    cin >> item;
    list.insertfirst(item);
    list.display();
    cout << "Enter items to inert in the list" << endl;
    cin >> item;
    list.insertfirst(item);
    list.display();
    cout << "Enter items to inert in the list" << endl;
    cin >> item;
    list.insertfirst(item);
    list.display();
    cout << "Enter items to inert in the list" << endl;
    cin >> item;
    list.insertfirst(item);
    list.display();
    cout << "Enter items to inert in the list" << endl;
    cin >> item;
    list.insertfirst(item);
    list.display();
    cout<<endl;
    //     if (list.isempty())
    //     {
    //         cout << "list is empty" << endl;
    //     }
    //     else
    //     {
    //         cout << "Number of nodes is " << list.count();
    //     }
    //     cout << "Enter Item for search";
    //     cin >> item;
    //     if (list.found(item)){

    //         cout << "is found";
    //     }
    //     else {

    //         cout << "not found";
    //     }
    //     int t , newn;
    //     cin>>t>>newn;
    // list.insertbefore(t,newn);
    // list.display();
    int newitem;
    cin >> newitem;
    list.append(newitem);
    list.display();
    return 0;
}