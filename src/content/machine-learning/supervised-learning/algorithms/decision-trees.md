# Decision Trees

Decision Trees are versatile machine learning algorithms that can be used for both classification and regression tasks by creating a tree-like model of decisions.

## What are Decision Trees?

A decision tree is a flowchart-like structure where:
- **Internal nodes** represent tests on attributes
- **Branches** represent outcomes of tests
- **Leaf nodes** represent class labels or predicted values

## How Decision Trees Work

### Tree Building Process

1. **Root Node**: Start with entire dataset
2. **Splitting**: Choose best feature to split data
3. **Branching**: Create branches for each possible value
4. **Recursion**: Repeat process for each subset
5. **Stopping**: Stop when criteria met (purity, depth, etc.)

### Splitting Criteria

**For Classification:**
- **Gini Impurity**: Measures probability of misclassification
  ```
  Gini = 1 - Σ(pᵢ)²
  ```
- **Entropy**: Measures information content
  ```
  Entropy = -Σ(pᵢ × log₂(pᵢ))
  ```

**For Regression:**
- **Mean Squared Error (MSE)**
- **Mean Absolute Error (MAE)**

## Advantages

✅ **Easy to Understand**: Visual and intuitive  
✅ **No Assumptions**: No assumptions about data distribution  
✅ **Handle Mixed Data**: Works with numerical and categorical features  
✅ **Feature Selection**: Automatically selects important features  
✅ **Missing Values**: Can handle missing data  
✅ **Non-linear**: Captures non-linear relationships  

## Disadvantages

❌ **Overfitting**: Prone to overfitting, especially with deep trees  
❌ **Instability**: Small data changes can create very different trees  
❌ **Bias**: Biased toward features with many levels  
❌ **Linear Boundaries**: Creates only axis-parallel splits  

## Preventing Overfitting

### Pre-pruning (Early Stopping)
- **Max Depth**: Limit tree depth
- **Min Samples Split**: Minimum samples to split a node
- **Min Samples Leaf**: Minimum samples in leaf nodes
- **Max Features**: Limit features considered for splitting

### Post-pruning
- **Cost Complexity Pruning**: Remove branches that don't improve performance
- **Reduced Error Pruning**: Remove nodes if removal improves validation accuracy

## Types of Decision Trees

### Classification Trees
- Predict discrete class labels
- Use Gini or Entropy for splitting
- Leaf nodes contain class predictions

### Regression Trees
- Predict continuous values
- Use MSE or MAE for splitting
- Leaf nodes contain average target values

## Use Cases

**Classification:**
- Medical diagnosis
- Credit approval
- Customer segmentation
- Fraud detection

**Regression:**
- Price prediction
- Risk assessment
- Performance forecasting

## Implementation Tips

1. **Data Preprocessing**:
   - Handle categorical variables appropriately
   - Consider feature scaling (not required but can help)
   - Deal with missing values

2. **Hyperparameter Tuning**:
   - Start with default parameters
   - Use cross-validation to find optimal depth
   - Balance between bias and variance

3. **Ensemble Methods**:
   - **Random Forest**: Multiple trees with random features
   - **Gradient Boosting**: Sequential tree building
   - **AdaBoost**: Adaptive boosting with weighted samples

## Example Structure

```
Is Income > 50k?
├── Yes → Is Age > 30?
│   ├── Yes → Approved
│   └── No → Is Education = Graduate?
│       ├── Yes → Approved
│       └── No → Rejected
└── No → Is Credit Score > 700?
    ├── Yes → Approved
    └── No → Rejected
```

Decision trees form the foundation for powerful ensemble methods like Random Forests and Gradient Boosting, making them essential to understand in machine learning.
