#include <iostream>
using namespace std;
int main(){
    int num;
    cin>>num;
    int counter=0;
    if(num==1){
        cout<<"0";
    }
    else {
        while (num-->0)
        {
            counter++;
            if(num<=1){
                break;
            }
        }
        cout<<counter;
    }
    
    return 0;
}