/**
 * Created by liangjz on 2019/1/30.
 */
import React from 'react';
class ShoppingList extends React.Component {
  render() {
    return (
        <div className="shopping-list">
          <h1> Shopping List 4 {this.props.name}</h1>
          <ul>
            <li>Instagram</li>
            <li>WhatsApp</li>
            <li>Instagram</li>
            <li>Instagram</li>
          </ul>

        </div>
    );
  }
}
export default ShoppingList