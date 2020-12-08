import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { navigation } = this.props;
    const { currentCinema } = this.props;
    const { name, description, phone, website } = currentCinema;
    const address = currentCinema["address\t"];
    return (
      <View>
        <Text>Cinema Name: {name}</Text>
        <Text>Cinema Description: {description}</Text>
        <Text>Cinema Address: {address}</Text>
        <Text>Cinema Phone: {phone}</Text>
        <Text>Cinema Website: {website}</Text>

        <Text>This is where I want a list to appear:</Text>

      </View>
    );
  }
}

const mapStateToProps = ({ currentCinema }) => ({ currentCinema });

export default connect(mapStateToProps)(CinemaDetails);
