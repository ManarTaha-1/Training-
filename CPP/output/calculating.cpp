// #include <iostream>
// using namespace std;
// int main(){
//     long long num;
//     cin>>num;
//         if (num%2==0){
//             cout<<num/2;
//         }
//         else {
//             cout<<-(num+1)/2;
//         }
    
//     return 0;
// }
#include <iostream>
using namespace std;
#include <cmath>

// even n/2 
// odd (-n+1)/2
int main()
{
 
 long long x ;
 long long res;
 cin >> x;
 if (x%2 == 0 ) // even
  cout << x/2;
  else if (x % 2 != 0)// odd
  {
      res = (x + 1)*-1 /2;
      cout << res;
  }
    return 0;
}
// a d f g done
// #include <iostream>
// using namespace std;
// int main(){
//     long long num;
//     cin>>num;
//     long long res=0;
// do
// {
//     if(num%2==0) res+=num;
//     else res-=num;
//     num--;
// } while (num>0);

    
//     cout<<res;
    
//     return 0;
// }