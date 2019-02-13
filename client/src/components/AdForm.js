import React from 'react'

export default function AdForm(props) {
  return (<form onSubmit={props.onSubmit}>
    <label>
      Name:
      <input type="text" name="title" onChange={props.onChange} value={props.values.name} />
    </label>
    <br></br>
    <label>
      Description:
      <input type="text" name="description" onChange={props.onChange} value={props.values.date} />
    </label>
    <br></br>
    <label>
      Picture:
      <input type="text" name="picture" onChange={props.onChange} value={props.values.picture} />
    </label>
    <br></br>
    <label>
      Price:
      <input type="text" name="price" onChange={props.onChange} value={props.values.price} />
    </label>
    <br></br>
    <label>
      Email:
      <input type="text" name="email" onChange={props.onChange} value={props.values.email} />
    </label>
    <br></br>
    <label>
      Phonenr:
      <input type="text" name="phonenr" onChange={props.onChange} value={props.values.phonenr} />
    </label>
    <br></br>
    <button type="submit">Add</button>
  </form>)
}
