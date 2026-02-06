// #include <stdio.h>

// int main()
// {
//     int marks[5] = {80, 75, 90, 85, 78};
//     int sum;

//     sum = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
//     float percentage = (sum / 500.0) * 100;

//     printf("Total Marks  %d\n", sum);
//     printf("Percentage   %.2f\n", percentage);

//     return 0;
// }
// #include <stdio.h>

// int main()
// {
//     int arr[10];
//     int positive = 0, negative = 0;

//     for (int i = 0; i < 10; i++)
//     {
//         printf("Enter number %d--> ", i + 1);
//         scanf("%d", &arr[i]);

//         if (arr[i] > 0)
//             positive++;
//         else if (arr[i] < 0)
//             negative++;
//     }

//     printf("User entered numbers:");
//     for (int i = 0; i < 10; i++)
//     {

//         printf(" %d ", arr[i]);
//      }

//     printf("\nTotal Positive Numbers %d\n", positive);
//     printf("Total Negative Numbers   %d\n", negative);

//     return 0;
// }
// #include <stdio.h>

// int main()
// {
//     char name[20];
//     printf("Enter your name: ");
//     scanf("%s", &name);
//     printf("Your name is :%s", name);

//     return 0;
// }
// #include <stdio.h>

// int main()
// {
//     for (char ch = 'a'; ch <= 'z'; ch++)
//     {
//         printf("%c ", ch);
//     }
//     return 0;
// }
// we have to take  user inputa 10 numbers hwich is biggehst number and smalles number which is biggest and smallest eelemnt

#include <stdio.h>

// int main()
// {
//     int arr[10];
//     // int max = arr[0];
//     // int min = arr[0];
//     int max;
//     int min;

//     for (int i = 0; i < 10; i++)
//     {
//         printf("Enter your number %d :", i + 1);
//         scanf("%d", &arr[i]);
//     }

//     max = arr[0];
//     min = arr[0];

//     for (int i = 0; i < 10; i++)
//     {
//         if (arr[i] > max)
//         {
//             max = arr[i];
//         }
//         else if (arr[i] < min)
//         {
//             min = arr[i];
//         }
//     }

//     printf("your largest  number is %d\n", max);
//     printf("your smallest number is %d\n", min);
// }

// int main()
// {
//     int studentId;
//     char contact[100];
//     char fullName[100];
//     char address[100];
//     char email[100];
//     char city[100];
//     char state[100];
//     char education[100];

//     printf("\n--------Registration form-----\n");

//     printf("enter student id :");
//     scanf("%d", &studentId);

//     printf("enter full name :");
//     scanf(" %[^\n]", &fullName);

//     printf("enter address :");
//     scanf(" %[^\n]", &address);

//     printf("enter contact :");
//     scanf("%s", &contact);

//     printf("enter emailID :");
//     scanf(" %[^\n]", &email);

//     printf("enter  city :");
//     scanf("%s", &city);

//     printf("enter state :");
//     scanf("%s", &state);

//     printf("enter latest Education :");
//     scanf(" %[^\n]", &education);

//     printf("\n---STUDENT DETAILS---\n");
//     printf("Student ID        : %d\n", studentId);
//     printf("Full Name         : %s\n", fullName);
//     printf("Address           : %s\n", address);
//     printf("Contact Number    : %s\n", contact);
//     printf("Email ID          : %s\n", email);
//     printf("City              : %s\n", city);
//     printf("State             : %s\n", state);
//     printf("Latest Education  : %s\n", education);
// }

// #include <stdio.h>

// int main()
// {
//     int student[5][3];

//     for (int i = 0; i < 5; i++)
//     {
//         printf("enter ID, Age, Marks of student %d: ", i + 1);
//         scanf("%d %d %d", &student[i][0], &student[i][1], &student[i][2]);
//     }

//     printf("--- Student Details ---\n");
//     printf("ID\tAge\tMarks\n");

//     for (int i = 0; i < 5; i++)
//     {
//         printf("%d\t%d\t%d\n", student[i][0], student[i][1], student[i][2]);
//     }

//     return 0;
// }

// #include <stdio.h>

// int main()
// {
//     char name[5][30];
//     char address[5][50];
//     char education[5][20];
//     long long contact[5];

//     printf("Enter details for 5 students:\n");

//     for (int i = 0; i < 5; i++)
//     {
//         printf("\n--- Student %d ---\n", i + 1);

//         printf("Enter full name: ");
//         scanf(" %[^\n]", &name[i]);

//         printf("Enter contact number: ");
//         scanf("%lld", &contact[i]);

//         printf("Enter address: ");
//         scanf(" %[^\n]", &address[i]);

//         printf("Enter latest education: ");
//         scanf(" %[^\n]", &education[i]);
//     }

//     printf("--- Student Details ---\n");

//     for (int i = 0; i < 5; i++)
//     {
//         printf("%d\t%lld\t%s\t%s\t%s\n",
//                i + 1, name[i], contact[i], address[i], education[i]);
//     }

//     return 0;
// }

int main()
{
    int n;
    int studentId[5];
    char names[5][50];
    char emails[5][50];

    printf("How many users u want to add: ");
    scanf("%d", &n);

    if (n > 5 || n < 1)
    {
        printf("u can only add 1 to 5 students.\n");
        return 0;
    }

    for (int i = 0; i < n; i++)
    {
        printf("--- Student %d ---\n", i + 1);

        printf("Enter ID: ");
        scanf("%d", &studentId[i]);

        printf("Enter name: ");
        scanf(" %[^\n]", names[i]);

        printf("Enter email: ");
        scanf(" %[^\n]", emails[i]);
    }

    printf("--- Student output ---\n");

    for (int i = 0; i < n; i++)
    {
        printf("%d\t%d\t%s\t%s\n",
               i + 1, studentId[i], names[i], emails[i]);
    }

    return 0;
}

// int main(){
//     char names[10][3];

//     for (int i = 0; i < 10;i++){

//     }
// }