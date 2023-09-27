
import groceryProducts from '../data/groceryproduct';

export default function handler(req, res) {
  res.status(200).json(groceryProducts);
}
