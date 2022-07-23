import { ListItemText, ListItem, List } from '@material-ui/core'
import React from 'react'

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem sx={{ display: 'list-item' }} style={{textAlign:'center'}}>
                    <ListItemText secondary={props.text} />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
