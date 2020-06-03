#José Carlos Chávez Morán

myArray = [13,2,4,35,1]


for i in 0..(myArray.length-1)
  if (i == 0)
    maxNumber = myArray[0]
  elsif (maxNumber < myArray[i])
    maxNumber = myArray[i]
  end
end

maxNumber