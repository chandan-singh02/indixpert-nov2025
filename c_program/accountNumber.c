
#include <stdio.h>

int countDigits(long long num)
{
    int count = 0;

    // if (num == 0)
    //     return 1;

    while (num > 0)
    {
        count++;
        num = num / 10;
    }
    return count;
}

int isValidAccount(long long account)
{
    if (countDigits(account) == 9)
        return 1;
    else
        return 0;
}

int main()
{
    long long account;

    printf("enters your 9digit account number: ");
    scanf("%lld", &account);

    if (isValidAccount(account))
    {
        printf("account number is valid!\n");
        printf("Your account number: %lld\n", account);
    }
    else
    {
        printf("eerror: Account number must be exactly 9 digits.\n");
    }

    return 0;
}

// task
int isValidAccount(char account[])
{
    int i = 0;
    int count = 0;

    // loop through characters
    while (account[i] != '\0')
    {
        // check digit manually
        if (account[i] < '0' || account[i] > '9')
            return 0;

        count++;
        i++;
    }

    // check exactly 9 digits
    if (count == 9)
        return 1;
    else
        return 0;
}

int main()
{
    char account[20];

    printf("enter your 9-digit account number: ");
    scanf("%s", account);

    if (isValidAccount(account))
    {
        printf("Account number is valid!\n");
        printf("Your account number: %s\n", account);
    }
    else
    {
        printf("Error: Account number must be exactly 9 digits and numeric only.\n");
    }

    return 0;
}
