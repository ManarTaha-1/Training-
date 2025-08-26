#include <iostream>
using namespace std;
struct node
{
    int data;
    node *next;
};
class linkedList
{
private:
    node *head;

public:
linkedList(){
    head=nullptr;
}    
void insert(int val)
    {
        node *newNode = new node();
        newNode->data = val;
        newNode->next = NULL;
        if (isEmpty())
        {
            head = newNode;
            return;
        }
        node *temp = head;
        while (temp->next != NULL)
        {
            temp = temp->next;
        }
        temp->next = newNode;
    }
    bool isEmpty()
    {
        return head == nullptr;
    }
    bool isSorted()
    {
        if (isEmpty() || head->next ==nullptr)
        {
            return true;
        }
        node *current = head;
        while(current->next !=nullptr){
            if(current->data>current->next->data){
                return false;
            }
            else{
            current = current->next;
            }
        }
        return true;
    }
    void printList()
    {
        node *temp = head;
        if (isEmpty())
        {
            cout << "NULL"<<endl;
        }
        else
        {
            while (temp!=nullptr)
            {
                cout << temp->data << " -> ";
                temp = temp->next;
            }
            cout << "NULL"<<endl;
        }
    }
};
int main()
{
    linkedList list;
    int n, val;
    cout << "Enter The number of Elemetns" << endl;
    cin >> n;
    for (int i = 0; i < n; i++)
    {
        cout << "Enter Value " << i + 1 << " = ";
        cin >> val;
        list.insert(val);
    }
    list.printList();
    if (list.isSorted())
    {
        cout << "The List is sorted in ascending order" << endl;
    }
    else
    {
        cout << "The List is NOT sorted in ascending order" << endl;
    }
    return 0;
}