// #include <stdio.h>

// int main()
// {
//     int oddCount = 0, evenCount = 0;
//     int count = 50;

//     for (int i = 1; i <= count; i++)
//     {
//         if (i % 2 == 0)
//         {
//             evenCount++;
//         }
//         else
//         {
//             oddCount++;
//         }
//     }
//     printf("\n");
//     printf("total even numberrs : %d\n", evenCount);
//     printf("total odd numberrs  : %d\n\n", oddCount);
//     return 0;
// }

// #include <stdio.h>

// int main()
// {
//     int i, n, count = 0;
//     printf("\n Enterr the number: ");
//     scanf("%d", &n);
//     for (i = 1; i <= n; i++)
//     {
//         if (i % 1000 == 0)
//             count++;
//     }

//     printf(" Total zeross digits from 1 to 100: %d\n\n", count);

//     return 0;
// }
#include <stdio.h>

int main()
{
    int i;
    printf("\n Enterr the number: ");
    // scanf("%d", &n);
    for (i = 100; i >= 1; i--)
    {
        printf("  %d", i);
    }

    return 0;
}
