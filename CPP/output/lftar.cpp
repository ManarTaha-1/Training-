#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int main(){
    int cases;
    cin>>cases;
    for(int i=0 ; i<cases; i++){
        int ingrs;
        cin>>ingrs;
        int times[ingrs]; 
        int res=0;
        for(int i=0 ;i<ingrs ; i++){
            cin>>times[i];
        }
        sort(times, times+ingrs);
        int counter=1;
        res=0;
        for(int i=0 ;i<ingrs ; i++){
            if (times[i]>=counter){
                res++;
                counter++;
            }
        }
        cout<<res<<endl;
        res=0;
        counter=1;
    }

    return 0;
}
// #include <iostream>
// #include <vector>
// #include <algorithm>
// #include <climits>
// using namespace std;

// int main() {
//     int n;
//     cin >> n;
//     vector<vector<int>> groups(n);

//     for (int i = 0; i < n; i++) {
//         int mi;
//         cin >> mi;
//         groups[i].resize(mi);
//         for (int j = 0; j < mi; j++) {
//             cin >> groups[i][j];
//         }
//         sort(groups[i].begin(), groups[i].end());
//     }

//     int Q;
//     cin >> Q;
//     while (Q--) {
//         int q;
//         cin >> q;
//         int min_value = INT_MAX;
//         int best_group = -1;

//         for (int i = 0; i < n; i++) {
//             int current_value = 0;
//             for (int j = 0; j < groups[i].size(); j++) {
//                 current_value += abs(groups[i][j] - q);
//             }

//             if (current_value < min_value) {
//                 min_value = current_value;
//                 best_group = i + 1;
//             }
//         }

//         cout << best_group << endl;
//     }

//     return 0;
// }
