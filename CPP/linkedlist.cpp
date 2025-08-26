#include <iostream>
using namespace std;
struct node
{
    int data;
    node *next;
};
class linkedList
{
public:
    node *head;
    linkedList()
    {
        head = NULL;
    }
    bool isEmpty()
    {
        return head == nullptr;
    }
    void insertAtBeginnig(int val)
    {
        node *newNode = new node();
        newNode->data = val;
        newNode->next = head;
        head = newNode;
    }
    void insertAtEnd(int val)
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
    void insertAtPosition(int val , int pos)
    {
        node *newNode = new node();
        newNode->data = val;
        if(isEmpty()){
            head=newNode;
            return;
        }
        else if(pos==1){
            newNode->next=head;
            head=newNode;
            return;
        }
            node* temp=head;
                for(int i=2 ; i<pos ; i++){
                    if(temp->next!=NULL){
                        temp=temp->next;
                    }
                    else{
                        cout<<"invalid position"<<endl;
                        delete newNode;
                        return;
                    }
            }
            newNode->next=temp->next;
            temp->next = newNode;
    }
    void deleteFromBeginnig()
    {
    }
    void deleteFromEnd()
    {
    }
    void deleteFromPosition()
    {
    }
    void deleteNode()
    {
    }
    bool search()
    {
    }
    void displayList()
    {
        if (isEmpty())
        {
            cout << "The list is Empty";
        }
        else
        {
            node *temp = head;
            while (temp != nullptr)
            {
                cout << temp->data << " -> ";
                temp = temp->next;
            }
        }
        cout << "NULL" << endl;
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
        list.insertAtEnd(val);
    }
    list.displayList();
    return 0;
}