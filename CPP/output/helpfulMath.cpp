#include <iostream>
#include <string>
#include <algorithm>
using namespace std;
int main(){
    string input;
    cin>>input;
    string output;
    for (int i=0 ; i<input.length(); i++){
        if(input[i]=='+'){
            continue;
        }
        else if(input[i]>0){
            output[i]=input[i];
        }
    }
    int n = sizeof(output)/ sizeof(output[0]);
    sort(output, output + n);
    for (int i=0 ; i<n ; i++){
        cout<<output[i]<<"+";
    }
    return 0;
}