import React, { useState, useCallback } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const CustomeInput = ({
  imagePath,
  value,
  name,
  buttonImage,
  onClick,
  onChange,
  disabled,
  onBlur,
  type,
  style,
}) => {
  return (
    <div
      style={{
        // margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        width: "100%",
        textAlign: "center",
        marginBottom: "5px",
        ...style,
      }}
    >
      <img scr={imagePath} alt="" style={{ width: "10%" }} />
      <input
        value={value}
        placeholder={name}
        name={name}
        style={{
          border: "none",
          outline: "none",
          width: buttonImage ? "80%" : "90%",
          marginRight: "5px",
        }}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        min={type == "date" && new Date().toISOString().split("T")[0]}
      />
      {buttonImage && (
        <button
          style={{
            width: "10%",
            border: "none",
            outline: "none",
            backgroundColor: "#ffffff",
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {/* <img scr={buttonImage} alt="" /> */}
          {buttonImage}
        </button>
      )}
    </div>
  );
};

const CustomeSelect = ({
  name,
  menuItems,
  imagePath,
  value,
  onChange,
  disabled,
  style,
}) => {
  return (
    <div
      className="text-center"
      style={{
        margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "40px",
        marginBottom: "5px",
        ...style,
      }}
    >
      <img scr={imagePath} alt="" style={{ width: "10%" }} />

      <select
        name={name}
        value={value}
        style={{
          border: "none",
          outline: "none",
          width: "100%",
          height: "28px",
          padding: "0px",
          color: "#827575",
          fontSize: "1.5rem",
          padding: "0px",
        }}
        onChange={onChange}
        disabled={disabled}
      >
        {menuItems?.map((item) => (
          <option
            value={item.id}
            style={{
              height: "30px",
            }}
          >
            {item.label}
          </option>
        ))}
      </select>
      <div
        style={{
          width: "3%",
          backgroundColor: "#ffffff",
        }}
      ></div>
    </div>
  );
};

const GroupRadioButton = ({ field, value, onChange, style }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "10px",
        ...style,
      }}
    >
      {field?.map((item) => (
        <div style={{ display: "flex" }}>
          <input
            type="radio"
            id={item?.name}
            name={item?.name}
            value={item?.value}
            checked={item?.value == value}
            style={{ marginRight: "7px" }}
            onChange={onChange}
          />
          <label for={item?.name}>{item?.name}</label>
        </div>
      ))}
    </div>
  );
};

const CustomAccortionList = ({ list }) => {
  const [display, setDisplay] = useState("flex");
  const [index, setIndex] = useState(0);

  const handleHideList = useCallback(
    (i) => () => {
      if (i == index) {
        setDisplay((prev) => (prev == "flex" ? "none" : "flex"));
      } else {
        setDisplay("flex");
      }
      setIndex(i);
    },
    [index]
  );
  return (
    <div>
      {list?.map((item, i) => (
        <>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 25px",
              fontSize: "13px",
              // border: "1px solid",
              // boxShadow: "1px 1px 1px black"
            }}
          >
            <img src={"images/booking-img/alldost.png"} alt="" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
              }}
            >
              <span>{item?.name}</span>
              <span>{item?.type}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>{`${item.dutarion} ${item?.unit}`}</span>
              <span>{item?.label}</span>
              <div></div>
            </div>

            <button
              onClick={handleHideList(i)}
              style={{
                height: "25px",
                width: "25px",
                background: "white",
                border: "none",
                outline: "none",
              }}
            >{`>`}</button>
          </div>

          {item?.MenuItem?.map((item1) => (
            <div
              style={{
                display: index == i ? display : "none",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid black",
                margin: "20px",
                padding: "10px",
                fontSize: "13px",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img scr="" alt="" />
                <div>{`${item1?.hour} Hours`}</div>
              </div>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <img scr="" alt="" />
                <div>{`${item1?.km} km`}</div>
              </div>
              <div>
                <div>{`$ ${item1?.amount}`}</div>
              </div>
              <input type="radio" />
            </div>
          ))}
          <hr
            style={{
              borderTop: "1px dashed ",
              display: index == i ? display : "none",
            }}
          />
        </>
      ))}
    </div>
  );
};

const MenuHeader = ({}) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1px 20px",
        alignItems: "center",
        marginBottom: "15px",
      }}
    >
      <div style={{ margin: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-justify"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2 12.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </div>
      <div style={{ textAlign: "center" }}>
        <a className="navbar-brand" href="index.html">
          <img
            src="images/wowtruck-logo.png"
            className="img-fluid"
            alt=""
            style={{ height: "50%", width: "50%" }}
          />
        </a>
      </div>
      <div style={{ margin: "5px" }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-person-fill"
          viewBox="0 0 16 16"
        >
          <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
        </svg>
      </div>
    </div>
  );
};

const PickUpPerson = ({ data }) => {
  const [open, setOpen] = useState(false);
  const handleVisibility = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);
  return (
    <>
      {data?.length > 1 && (
        <div
          style={{ margin: "10px 0px", border: "1px solid", padding: "5px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "5px 15px",
              minHeight: "40px",
              alignItems: "center",
              borderBottom: open ? "1px solid" : "none",
            }}
            onClick={handleVisibility}
          >
            <div> user </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {data.map((item, index) => (
                <>
                  {index > 0 && (
                    <div
                      style={{
                        background: "rgb(0, 50, 160)",
                        padding: "0px 10px",
                        color: "#ffff",
                        borderRadius: "20px",
                        margin: "2px",
                      }}
                    >
                      {`Pick${index}`}
                    </div>
                  )}
                </>
              ))}
            </div>

            <div>{">"}</div>
          </div>

          <div style={{ display: open ? "block" : "none" }}>
            {data?.map((item, index) => (
              <>
                {index > 0 && (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      margin: " 5px",
                      // float:"left",
                      // alignItems:"flex-start"
                    }}
                  >
                    <div style={{ margin: "0px 0px" }}> {`Pick${index}`}</div>
                    <div style={{ display: "flex" }}>
                      <input
                        name="name"
                        placeholder="Name"
                        style={{
                          outline: "none",
                          border: "none",
                          borderBottom: "1px solid",
                          margin: "5px",
                        }}
                      />
                      <input
                        name="phone"
                        placeholder="phone number"
                        style={{
                          outline: "none",
                          border: "none",
                          borderBottom: "1px solid",
                          margin: "5px",
                        }}
                      />
                    </div>
                  </div>
                )}
              </>
            ))}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleVisibility}
                style={{
                  background: "rgb(0, 50, 160)",
                  color: "#ffff",
                  border: "none",
                  padding: "5px 15px",
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CustomButton = ({ ButtonImage, name, onClick }) => {
  return (
    <button
      style={{
        display: "flex",
        justifyContent: "end",
        border: "1px solid",
        background: "#ffff",
        alignItems: "center",
        width: "100%",
        height: "40px",
        marginBottom: "10px",
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: "95%",
          padding: "0% 10%",
          color: "#827575",
          textAlign: "start",
        }}
      >
        {name}
      </div>
      <div style={{ width: "5%", margin: "3%" }}>{ButtonImage}</div>
    </button>
  );
};

const CustomeAdvanceAmount = ({}) => {
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("none");

  const taxAmtVal = (val) => {
    const data = (val || "").toString().replace(/\D+/g, "").slice(0, 7);
    return parseFloat(data) > 0
      ? (parseFloat(data) / 100)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      : "";
  };

  const handleAmont = useCallback((event) => {
    const { name, value } = event.target;

    setValue(taxAmtVal(value));
  }, []);

  const handleVisibility = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);

  const handleConfirm = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);
  const handleClose = useCallback(() => {
    setDisplay((prev) => (prev == "none" ? "block" : "none"));
  }, []);

  return (
    <div style={{ marginBottom: "10px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
          border: "1px solid",
          alignItems: "center",
          padding: "10px",
        }}
        onClick={handleVisibility}
      >
        <div>icon</div>
        <div>{value ? value : "Advance Amount"}</div>
        <div>arrow</div>
      </div>
      <div
        style={{
          display: display,
          justifyContent: "center",
          padding: "10px",
          border: "1px solid",
          borderTop: "none ",
        }}
      >
        <input
          name="Amount"
          placeholder="advane Amount"
          onChange={handleAmont}
          value={value}
          style={{
            height: "40px",
            width: "80%",
            textAlign: "center",
            margin: "0% 10%",
            outline: "none",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "40%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="radio" id="cash" />
            <label for="cash">cash</label>
          </div>
          <div
            style={{
              width: "40%",
              height: "40px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="radio" id="wallet" />
            <label for="wallet">wallet</label>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            width: "40%",
            margin: "0% 30%",
          }}
        >
          <button
            style={{
              color: "#ffffff",
              background: "#0032a0",
              padding: "5px 10px",
              border: "none",
            }}
            onClick={handleConfirm}
          >
            confirm
          </button>
          <button
            style={{
              color: "#ffffff",
              background: "#0032a0",
              padding: "5px 10px",
              border: "none",
            }}
            onClick={handleClose}
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

const CustomAddress = ({
  handlePickupChange,
  handlePickupSelect,
  value,
  imagePath,
  ButtonImage,
  disabled,
  onClick,
  name ,
}) => {
  console.log(value, "values");

  return (
    <div
      style={{
        margin: "2px 0px",
        border: "1px solid",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        // height: "40px",
        width: "100%",
        textAlign: "center",
        marginBottom: "5px",
      }}
    >
      <div style={{ width: "10%" }} >
        <img scr={imagePath} />
      </div>
      <PlacesAutocomplete
        value={value?.address}
        onChange={handlePickupChange}
        onSelect={handlePickupSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div
            className="pickup-autocomplete-dropdown-container"
            style={{ border: "none", outline: "none", width:"80%" }}
          >
            <input
              {...getInputProps({
                autoComplete: "off",
                placeholder: `${name}`,
                className:
                  "drop-location-search-input form-control shadow-none",
              })}
              style={{ border: "none", outline: "none" }}
            />
            <div className="drop-suggestions-container">
              {suggestions.map((suggestion, index) => {
                const className = suggestion.active
                  ? "drop-suggestion-item drop-suggestion-item--active"
                  // : "drop-suggestion-item";
                  : "drop-suggestion-item drop-suggestion-item--active";

                return (
                  <div
                    key={index}
                    {...getSuggestionItemProps(suggestion, {
                      className,
                    })}
                  >
                    <i
                      className="bi bi-geo-alt-fill"
                      style={{
                        paddingRight: "5px",
                        color: "lightgreen",
                      }}
                    />
                    <span>{suggestion.formattedSuggestion.mainText}</span>
                    <span className={"secondary_text"}>
                      {suggestion.formattedSuggestion.secondaryText}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <div style={{ width: "10%", margin:"10px" }} >
        <button
          style={{
            width: "10%",
            border: "none",
            outline: "none",
            backgroundColor: "#ffffff",
          }}
          onClick={onClick}
          disabled={disabled}
        >
          {ButtonImage}
        </button>
      </div>
    </div>
  );
};
export {
  CustomAddress,
  CustomeInput,
  CustomeSelect,
  GroupRadioButton,
  CustomAccortionList,
  MenuHeader,
  PickUpPerson,
  CustomButton,
  CustomeAdvanceAmount,
};
