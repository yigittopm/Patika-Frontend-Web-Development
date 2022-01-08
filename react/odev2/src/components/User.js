import PropTypes from 'prop-types'

function User({name, surname}) {
    return (
        <>
            <h1>{`${name} ${surname}`}</h1>
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired
}

User.defaultProps = {
    name: "Mert",
    surname: "Yiğittop"
}

export default User