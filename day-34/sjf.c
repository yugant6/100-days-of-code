#include<stdio.h>

void main()
{
 int e,f,g,h,j,k,temp2,l,m,temp,temp1,c,c2,c1,n,i,bt[10],at[10],wt[10],avgwt,tat[10],avgtat;
 printf("Enter the number of processes");
 scanf("%d",&n);
 printf("Enter the burst time of process");
 for(i=0;i<n;i++)
{
 printf("Enter burst time of p%d process",i+1);
 scanf("%d",&bt[i]);
}

 printf("Enter the arrival time of processes ");
for(i=0;i<n;i++)
{
 printf("Enter the arrival time of p%d process",i+1);
 scanf("%d",&at[i]);
}
for(i=0;i<n;i++)
{
if(bt[i]>bt[i+1])
{
 bt[i+1]=bt[i];
}}
for(i=0;i<n;i++){
if(at[i]==0){
tat[i]=bt[i];
e=tat[i];
i=c;
temp= bt[i];
wt[i] = tat[i]-bt[i];
f=wt[i];
}
}

for(i=0;i<n;i++)
{
 if(at[i]==c)
 continue;
 tat[i] = (temp+bt[i])- at[i]; 
 g=tat[i];
  wt[i] = tat[i] -bt[i];
 h=wt[i];
temp1 =bt[i];
 printf("%d",i);
 i=c1;
}

for(i=0;i<n;i++)
{
 if(i==c | i==c1)
 continue;
 tat[i] = (temp+temp1+bt[i])-at[i];
 j=tat[i];
 wt[i] = tat[i]- bt[i];
 k=wt[i]; 
temp2= bt[i];
 printf("%d",i);
 i =c2;
}

for(i=0;i<n;i++)
{
 if(i==c | i==c1 |i==c2)
 continue;
 tat[i] = (temp+temp1+temp2+bt[i])-at[i];
 l=tat[i];
wt[i]= tat[i]-bt[i];
  m=wt[i];
printf("%d",i);
}

avgtat=(e+g+j+l)/4;
avgwt= (k+m+h+f)/4;
printf("avg tt %d",avgtat);
printf("avg wt %d",avgwt);

}
