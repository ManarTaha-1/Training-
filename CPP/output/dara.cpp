// #include <iostream>
// using namespace std;
// int main(){
//     int size;
//     cin>>size;
//     int sizearr;
//     int res=0;
//     int arr[sizearr];
//     for(int i=0 ; i<size ; i++){
//         cin>>sizearr;
//         for(int j=0 ; j<sizearr ;j++){
//             cin>>arr[j];
//             for (int k=0 ;k<sizearr ; k++){
//                 if(arr[k]>=0){
//                     res+=arr[k];
//                 }
//                 else if(arr[k]<0){
//                     res+=(-1*arr[k]);
//                 }
//             }
//         }
//         cout<<res;
//     }
// return 0;
//a
// #include <iostream>
// #include <vector>
// using namespace std;

// int main() {
//     int t; 
//     cin >> t;
    
//     while (t--) {
//         int n; 
//         cin >> n;
        
//         vector<int> arr(n);
//         int positiveCount = 0, negativeCount = 0;
        
//         for (int i = 0; i < n; ++i) {
//             cin >> arr[i];
//             if (arr[i] > 0&& arr[i]%2==0) {
//                 positiveCount++;
//             } else if (arr[i] < 0&&arr[i]%2==0) {
//                 negativeCount++;
//             }
//         }
        
//         int maxLength = n + positiveCount + negativeCount;
//         cout << maxLength << endl;
//     }
    
//     return 0;
// }
//b
#include <iostream>
using namespace std;

int main() {
    int t;
    cin>>t;
    while (t--){
        int n;
        cin>>n;
        if (n==1){
            cout<<"-1"<<endl;

        }
        else {
            for(int i=1; i<n*2 ; i++){
                cout<<i<<" "<<i+1<<endl;
            }
        }
    }
    return 0;
}
#include <iostream>
using namespace std;

int main() {
    cout<<"Ramadan Mubarak!";
    return 0;
}



