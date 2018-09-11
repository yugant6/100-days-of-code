echo " Enter the radius of circle"
read r
area = $(echo "3.14*$r*$r"|bc)
circum =$(echo "3.14*2*$r"|bc)
echo "Area of circle is " $area
echo "circumference of circle is " $circum
