# Support Vector Machines (SVM)

Support Vector Machines are powerful supervised learning algorithms used for classification and regression tasks, known for their effectiveness in high-dimensional spaces.

## What are Support Vector Machines?

SVM finds the optimal hyperplane that separates different classes by maximizing the margin between classes. The data points closest to the hyperplane are called **support vectors**.

## Key Concepts

### Hyperplane
- **2D**: A line that separates classes
- **3D**: A plane that separates classes  
- **Higher dimensions**: A hyperplane that separates classes

### Margin
The distance between the hyperplane and the nearest data points (support vectors). SVM aims to maximize this margin.

### Support Vectors
The data points that lie closest to the decision boundary. These are the critical elements that define the hyperplane.

## Types of SVM

### 1. Linear SVM
Used when data is linearly separable.

**Objective**: Find hyperplane `w·x + b = 0` that maximizes margin

**Optimization Problem**:
```
Minimize: (1/2)||w||²
Subject to: yᵢ(w·xᵢ + b) ≥ 1
```

### 2. Non-Linear SVM (Kernel SVM)
Used when data is not linearly separable.

**Kernel Trick**: Maps data to higher-dimensional space where it becomes linearly separable.

**Common Kernels**:
- **Linear**: `K(x,y) = x·y`
- **Polynomial**: `K(x,y) = (x·y + c)^d`
- **RBF (Gaussian)**: `K(x,y) = exp(-γ||x-y||²)`
- **Sigmoid**: `K(x,y) = tanh(γx·y + c)`

### 3. Soft Margin SVM
Allows some misclassification for better generalization.

**C Parameter**: Controls trade-off between margin maximization and classification errors
- **High C**: Hard margin (less tolerance for errors)
- **Low C**: Soft margin (more tolerance for errors)

## SVM for Different Tasks

### Classification (SVC)
- **Binary**: Separates two classes
- **Multi-class**: 
  - One-vs-One: n(n-1)/2 classifiers
  - One-vs-Rest: n classifiers

### Regression (SVR)
Finds a function that deviates from targets by at most ε (epsilon).

## Advantages

✅ **Effective in High Dimensions**: Works well with many features  
✅ **Memory Efficient**: Uses subset of training points (support vectors)  
✅ **Versatile**: Different kernels for different data types  
✅ **Works with Small Datasets**: Effective even with limited data  
✅ **Global Optimum**: Convex optimization problem  

## Disadvantages

❌ **No Probability Estimates**: Doesn't provide probability outputs  
❌ **Sensitive to Scaling**: Requires feature normalization  
❌ **Slow on Large Datasets**: O(n³) time complexity  
❌ **Hyperparameter Tuning**: Requires careful parameter selection  
❌ **Not Interpretable**: Difficult to understand decision process  

## Important Parameters

### C (Regularization)
- Controls trade-off between smooth decision boundary and classifying training points correctly
- **Low C**: Smooth decision surface (may underfit)
- **High C**: More complex decision surface (may overfit)

### Gamma (for RBF kernel)
- Controls influence of single training example
- **Low Gamma**: Far-reaching influence (may underfit)
- **High Gamma**: Close-reaching influence (may overfit)

### Kernel
- Choose based on data characteristics:
  - **Linear**: For linearly separable or high-dimensional data
  - **RBF**: Good default choice for non-linear data
  - **Polynomial**: For polynomial relationships

## Use Cases

**Classification:**
- Text classification
- Image classification
- Gene classification
- Document classification

**Regression:**
- Stock price prediction
- Weather forecasting
- Drug design

## Implementation Tips

1. **Data Preprocessing**:
   ```python
   # Always scale features for SVM
   from sklearn.preprocessing import StandardScaler
   scaler = StandardScaler()
   X_scaled = scaler.fit_transform(X)
   ```

2. **Parameter Tuning**:
   ```python
   # Use GridSearchCV for hyperparameter tuning
   param_grid = {
       'C': [0.1, 1, 10, 100],
       'gamma': ['scale', 'auto', 0.1, 1],
       'kernel': ['rbf', 'linear']
   }
   ```

3. **Model Selection**:
   - Start with RBF kernel
   - Try linear kernel for high-dimensional data
   - Use cross-validation for parameter selection

## Mathematical Intuition

The SVM optimization problem seeks to:
1. **Maximize margin**: `2/||w||` between classes
2. **Minimize errors**: Penalty for misclassified points
3. **Balance both**: Through C parameter

This creates a robust classifier that generalizes well to unseen data by focusing on the most informative data points (support vectors).
