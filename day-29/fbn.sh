echo "How many numbers in fibonacii series"
read n
x = 0
y = 1
i = 2
echo "fibonacii series upto $n terms"
echo "$x"
echo "$y"
while [ $i -lt $n ]
do 
 i =`expr $i+1`
 z = `expr $x+$y`
 echo "$z"
 x=$y
 y=$z
done
