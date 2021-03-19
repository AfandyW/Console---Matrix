//transpose Matrix Test
function transposeMatrix(arrayMatrix){
  let tempMatrix = []
  //declare 2d array
  for (let i = 0; i < arrayMatrix[0].length; i++) { 
    tempMatrix[i] = Array(2); 
  }
  
  for (let i = 0; i < arrayMatrix.length; i++){
    for (let j = 0; j < arrayMatrix[0].length; j++){
      tempMatrix[j][i] = arrayMatrix[i][j]
    }
  }
  return tempMatrix
}

let matrixA = [[1,2,3],[1,2,3],[1,2,3]]
let matrixTest = [
  [1,5,7],
  [9,3,4],
  [0,1,0],
  [6,4,3]
  ]

console.log(transposeMatrix(matrixTest))
console.log(transposeMatrix(matrixA))

//Transpose and check simetris matrix

function simetrisMatrix(matrix, transposeMatrix){
  for (let i = 0; i < matrix.length; i++){
    for (let j = 0; j < matrix[0].length; j++){
      if(matrix[i][j] != transposeMatrix[i][j]){
        return "Matrix tidak Simetris"
      }
    }
  }
  return "Matrix Simetris"
}
let matrixAB = [[5,2,1],[2,3,4],[1,4,7]]
let matrixABT = transposeMatrix(matrixAB)

console.log(simetrisMatrix(matrixAB,matrixABT))


//multipleMatrix test
function multipleMatrix(arrayMatrixA, arrayMatrixB){
  let tempMatrix = []
  //declare 2d array
  for (let i = 0; i < arrayMatrixA.length; i++) { 
    tempMatrix[i] = Array(2); 
  }

  for (let i = 0; i < arrayMatrixA.length; i++){
    for (let j = 0; j < arrayMatrixB[0].length; j++){
      for (let k = 0; k < arrayMatrixB.length; k++){
        //if tempMatrix not null
        if (tempMatrix[i][j]){
          tempMatrix[i][j] += arrayMatrixA[i][k] * arrayMatrixB[k][j]
        }else{
          tempMatrix[i][j] = arrayMatrixA[i][k] * arrayMatrixB[k][j]
        }
      }
    }
  }
  return tempMatrix
}

let matrixB = [[1,7],[2,4]]
let matrixC = [[3,3],[5,2]]
console.log("Matrix B = ", matrixB)
console.log("Matrix C = ", matrixC)
console.log(multipleMatrix(matrixB, matrixC))