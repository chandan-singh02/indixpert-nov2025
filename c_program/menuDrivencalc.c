
#include <stdio.h>
#include <string.h>
int operations;
int num1, num2;
int main()
{
    do
    {
        printf("--------Calculator Menu--------\n");
        printf("1. Add\n");
        printf("2. Subtract\n");
        printf("3. Multiply\n");
        printf("4. Divide\n");
        printf("5. Exit\n");
        printf("Which operations do u want to perform.\n");

        scanf("%d", &operations);

        if (operations == 1){

            printf(" Enter first Number");
            scanf("%d", &num1);
            printf(" Enter second Number");
            scanf("%d", &num2);

            int result = num1 + num2;
            printf("%d", result);
        }
        else if (operations == 2)
        {
            printf(" Enter first Number");
            scanf("%d", &num1);
            printf(" Enter second Number");
            scanf("%d", &num2);

            int result = num1 - num2;
            printf("%d", result);
        }
        else if (operations == 3)
        {
            printf(" Enter first Number");
            scanf("%d", &num1);
            printf(" Enter second Number");
            scanf("%d", &num2);

            int result = num1 * num2;
            printf("%d", result);
        }
        else if (operations == 4)
        {
            printf(" Enter first Number");
            scanf("%d", &num1);
            printf(" Enter second Number");
            scanf("%d", &num2);
            if (num2 == 0)
            {
                printf("not allowd please");
            }
            else
            {
                int result = num1 / num2;
                printf("%d", result);
            }
        }
        else if (operations == 5)
        {
            printf("exits the program");
            break;
        }
        else
        {
            printf("plzz enter a valid number operations do u want to perform");
        }

    } while (operations != 5);
    {
        return 0;
    }
}


//task
char regUser[20];
char regPass[20];

void registration();
void login();
void menu();

void registration()
{
    printf("\nUser Registration \n");
    printf("Enter username: ");
    scanf("%s", regUser);

    printf("Enter password: ");
    scanf("%s", regPass);

    printf("\nregistration Successful!\n");
}

void login()
{
    char Username[20];
    char Password[20];

    printf("\n Login \n");
    printf("Enter Username: ");
    scanf("%s", Username);

    printf("Enter Password: ");
    scanf("%s", Password);

    if (strcmp(Username, regUser) == 0 && strcmp(Password, regPass) == 0)
    {
        printf("\nLogin Successfully \n");
    }
    else
    {
        printf("\nInvalid Username or Password\n");
    }
}

void menu()
{
    int choice;

    do
    {
        printf("\nMENU ");
        printf("\n1. Registration");
        printf("\n2. Login");
        printf("\n3. Exit");
        printf("\nEnter your choice: ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            registration();
            break;

        case 2:
            login();
            break;

        case 3:
            printf("\nThank you! Exiting\n");
            break;

        default:
            printf("\nInvalid choice! Try again.\n");
        }

    } while (choice != 3);
}



//task

int main()
{
    printf(" Bus Reservation System\n");
    menu();
    return 0;
}



char regUser[20];
char regPass[20];
void registration();
void login();
void menu();
void registration()
{
    printf("\n****User Resistration****\n");
    printf("Enter username :");
    scanf(" %s", &regUser);
    printf("\nEnter userpassword:");
    scanf(" %s", &regPass);
    printf("\nRegsitration Successful!\n");
}

void login()
{

    int choice;
    char Username[40];
    char Password[40];
    printf("\n1.Login");
    printf("\n2.Exit");
    printf("\nEnter your choice:");
    scanf("%d", &choice);
    if (choice == 1)
    {
        printf("Enter Username:");
        scanf(" %s", &Username);
        printf("Enter Password:");
        scanf(" %s", &Password);
        if (strcmp(Username, "himanshiint") == 0 && strcmp(Password, "123@int") == 0)
        {
            printf("\nLogin Successfully");
        }
        else
        {
            printf("\nInvalid Username or Password");
        }
    }
    else
    {
        printf("\nExit");
    }
}
void menu()
{
    int choice;
    do
    {
        printf("\n===**====Menu===**");
        printf("\n1.Login");
        printf("\n2.Registration");
        printf("\n3.Exit");
        printf("\nEnter your choice");
        printf("%d", &choice);
        switch (choice)
        {
        case 1:
            login();
            break;
        case 2:
            registration();
            break;
        case 3:
            printf("\n Thank you !You have been regsitered successfully.\n");
            break;
        default:
            printf("\n wrong password or username plese try again.\n");
        }
    } while (choice != 3);
}
int main()

{
    printf("***Bus Reservation System******\n");

    menu();
    // registration();
    return 0;
}