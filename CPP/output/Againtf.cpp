#include <iostream>
#include <cmath>
using namespace std;
int main()
{
    unsigned long long int n;
    cin >> n;
    long long c = (pow(5, n));
    cout << (c % 100);
    return 0;
}