#include <iostream>
using namespace std;
#define maxSize 15
class stack
{
private:
    int top; 
    int arr[maxSize];
public:
    stack(){
        top=-1;
    }
    bool isEmpty(){
        return top==-1;
    }
    bool isFull(){
        return top==maxSize-1;
    }
    void push(int val){
        if(isFull()){
            cout<<"Error : Stack Overflow"<<endl;
            return;
        }
        else{
            arr[++top]=val;
        }
    }
    int pop()
    {
        if (isEmpty())
        {
            cout << "Stack Underflow" << endl;
            return 0; 
        }
            return arr[top--];
    }
    void deleteMiddle(){
        if(isEmpty()){
            cout<<"Error : Stack Underflow"<<endl;
            return;
        }
        int size= top+1;
        int mid=(size%2==0) ? (size/2) : ((size/2)+1);
        stack temp; //temporary stack
        for(int i=0 ; i<mid-1 ; i++){
            temp.push(pop());
        }
        pop();
        while (!temp.isEmpty())
        {
            push(temp.pop());
        }
    }
    void display(){
        if(isEmpty()){
            cout<<"Error : Stack Underflow"<<endl;
            return;
        }
            cout<<"Stack Elements are : ";
            for(int i=top ; i>=0 ; i--) {
                cout<<arr[i]<<" ";
            }
        cout<<endl;
    }
};


int main (){
    stack stk;
    stk.push(10);
    stk.push(20);
    stk.push(30);
    stk.push(40);
    stk.push(50);
    stk.display();
    cout<<"Delete Middle element of the Stack :"<<endl;
    stk.deleteMiddle();
    stk.display();
    return 0;
}
