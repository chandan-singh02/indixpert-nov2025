#include <stdio.h>

int main()
{
    int num = 1;
    int count = 0;

    while (1)
    {
        if (num % 2 != 0)
        {
            printf("%d ", num);
            count++;
        }
        // if (num == 200)
        // {
        //     break;
        // }
        if (count == 200)
        {
            break;
        }
        num++;
    }

    return 0;
}
