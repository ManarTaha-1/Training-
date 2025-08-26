#include <iostream>
#include <string>
using namespace std;
int main(){
    int num;
    cin>>num;
    string input;
    cin>>input;
    int counter=0;
    for(int i=0 ; i<num ; i++){
        if(input[i]==input[i+1]){
            counter++;
        }
    }
    cout<<counter;
    return 0;
}
// a d f g h i done 