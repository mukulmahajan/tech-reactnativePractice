import React, { Component } from 'react';
import {
    Text,
    TouchableWithoutFeedback,
    View,
    UIManager,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Card } from './common';
import * as actions from '../actions';


class ListItem extends Component {
    
    componentDidUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {

        const { library, expanded } = this.props;


        if (expanded) {
            return (
                <CardSection>
                    <Text style={{ flex: 1 }}>
                        {library.item.description}</Text>
                </CardSection>
            );
        }
    }

    render() {
        const { titleStyle } = styles;
        const { id, title } = this.props.library.item;



        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >

                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}


const styles = {
    titleStyle: {
        fontSize: 21,
        paddingLeft: 15

    }
};

const mapStatetoProps = (state, ownProps) => {

    const expanded = state.selectedLibraryId === ownProps.library.item.id;

    return { expanded: expanded };

};

export default connect(mapStatetoProps, actions)(ListItem);
