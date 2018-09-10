echo "Enter a number"
read num
fact =1
on =$n
while[ $n -ge 1]
do
 fact =`expr $fact \* $n`
 n= `expr $n -1`
done
echo "factorial for $on is $fact"
