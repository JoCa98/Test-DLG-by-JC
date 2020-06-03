#José Carlos Chávez Moran

myArray = [1,2,1,3,3,1,2,1,5,1]

printArray = ["1:","2:","3:","4:","5:"]

for i in 0..(myArray.length-1)
  if (myArray[i] == 1)
    printArray[0] += "*"
  elsif (myArray[i] == 2)
    printArray[1] +=  "*"
  elsif (myArray[i] == 3)
    printArray[2] += "*"
  elsif (myArray[i] == 4)
    printArray[3] += "*"
  elsif (myArray[i] == 5)
    printArray[4] += "*"
  end
end

puts printArray