import React, { useState, useEffect, useLayoutEffect } from "react";
import {
  Alert,
  Button,
  Tabs,
  Tab,
  Form,
  Pagination,
  Modal,
} from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import JustUserPicture from "../common/JustUserPicture.jsx";

import "../../style/style.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

import RedirectIfNeeded from "../utility/RedirectIfNeeded";

import request from "../../util/request.js";
import session from "../../util/session.js";

const PAGINATION_VISIBLE_COUNT = 3;
const PAGINATION_PROVIDERS_PER_PAGE = 3;

let PageSettings = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  let [provider, setProvider] = useState({ count: 0, list: [] });
  let [query, setQuery] = useState("");
  let [searchQuery, setSearchQuery] = useState("");
  let [pagination, setPagination] = useState({
    index: 1,
    count: 0,
  });
  let [alert, setAlert] = useState(null);
  let [sessionInterval, setSessionInterval] = useState(null);
  let [fileUpload, setFileUpload] = useState(null);
  let [, updateState] = React.useState();
  let forceUpdate = React.useCallback(() => updateState({}), []);
  let [showModal, setShowModal] = useState(false);

  //TEMPORAL
  let [imageUrl, setImageUrl] = useState("");
  let [passwordUser, setPasswordUser] = useState("");
  let [confirmPasswordUser, setConfirmPasswordUser] = useState("");

  let [Bio, setBio] = useState("");
  let [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
      updateProviderCount();
      if (!session.isReady()) {
        sessionInterval = setInterval(() => {
          if (session.isReady()) {
            clearInterval(sessionInterval);
          }
        }, 10);
      }
    }
  });

  let handleBioKeyChange = (event) => {
    setBio(event.target.value);
  };

  let handleWeakRegex = (pass) => {
    const weakRegex = /^(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]{8,32}$/g;
    // string must containt at least one digit and alphabetical letter with the a minimum length of 8 and a maximum length of 32

    if (!weakRegex.test(pass)) {
      return false;
    }
    return true;
  };

  let handleMediumRegex = (pass) => {
    const mediumRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-Za-z0-9]{8,32}$/g;
    // string must containt at least one digit, one lowercase alphabetical letter and one uppercase alphabetical letter with the a minimum length of 8 and a maximum length of 32

    if (!mediumRegex.test(pass)) {
      return false;
    }

    return true;
  };

  let handleStrongRegex = (pass) => {
    const strongRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*()\-_=+\[\]{}<.>/?~])[A-Za-z0-9!@#$%^&*()\-_=+\[\]{}<.>/?~]{8,32}$/g;
    // string must containt one digit, one lowercase alphabetical letter, one uppercase alphabetical letter and one of the specified special characters with the a minimum length of 8 and a maximum length of 32

    if (!strongRegex.test(pass)) {
      return false;
    }

    return true;
  };

  let handlePassword = (pass) => {
    if (!handleStrongRegex(pass)) {
      if (!handleMediumRegex(pass)) {
        if (!handleWeakRegex(pass)) {
          return false;
        }
      }
    }
    return true;
  };

  let updateProviders = () => {
    request
      .get2(
        searchQuery.length > 0
          ? request.routes.API_PROVIDER_SEARCH
          : request.routes.API_PROVIDER_GET_INTERVAL,
        {
          skip: PAGINATION_PROVIDERS_PER_PAGE * (pagination.index - 1),
          count: Math.min(
            PAGINATION_PROVIDERS_PER_PAGE,
            provider.count -
              PAGINATION_PROVIDERS_PER_PAGE * (pagination.index - 1)
          ),
          query: query,
        },
        session.authHeaders()
      )
      .then((res) => {
        setProvider({
          ...provider,
          list: res.data,
        });
        provider = {
          ...provider,
          list: res.data,
        };
        updateProviderChecked();
      })

      .catch((err) => {
        session.onUpdate();
        console.error(err);
      });
  };

  let updateProviderCount = () => {
    request
      .get2(
        searchQuery.length > 0
          ? request.routes.API_PROVIDER_SEARCH_COUNT
          : request.routes.API_PROVIDER_COUNT,
        {
          query: query,
        },
        session.authHeaders()
      )
      .then((res) => {
        let providerCount = res.data.count;

        setProvider({
          ...provider,
          count: providerCount,
        });
        provider = {
          ...provider,
          count: providerCount,
        };
        setPagination({
          ...pagination,
          count: Math.ceil(providerCount / PAGINATION_PROVIDERS_PER_PAGE),
        });

        pagination = {
          ...pagination,
          count: Math.ceil(providerCount / PAGINATION_PROVIDERS_PER_PAGE),
        };

        updateProviders();
      })
      .catch((err) => {
        session.onUpdate();
        console.error(err);
      });
  };

  let updateProviderChecked = () => {
    provider.list.map((providerElem, index) => {
      request
        .get2(
          request.routes.API_PREFERENCES_GET,
          {
            uid: session.get().userId,
            prov_id: providerElem.id,
          },
          session.authHeaders()
        )
        .then((res) => {
          let checked = res.data.toString().trim().toLowerCase() === "1";

          provider.list[index].checked = checked; //@SEE
          forceUpdate();
        })
        .catch((err) => {
          session.onUpdate();
          console.error(err);
        });
    });
  };

  let handlePaginationFactory = (i) => {
    return (event) => {
      if (i >= 1 && i <= pagination.count) {
        setPagination({
          ...pagination,
          index: i,
        });
        pagination = {
          ...pagination,
          index: i,
        };
        updateProviders();
      }
    };
  };

  let handleSearchKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
      event.preventDefault();
    }
  };

  let handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  let handleSearch = () => {
    setQuery(searchQuery);
    console.log(`Search: ${query}`);
    updateProviderCount();
  };

  let handleSaveSettings = () => {
    provider.list.map((provider, index) => {
      request
        .put2(
          request.routes.API_PREFERENCES_UPDATE,
          {
            uid: session.get().userId,
            prov_id: provider.id,
            status: provider.checked ? true : false,
          },
          session.authHeaders()
        )
        .then((res) => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          setAlert(
            <Alert id={"animation"} key={"somekey"} variant={"success"}>
              Preferences updated!
            </Alert>
          );
          setTimeout(() => {
            setAlert(null);
          }, 4000);
        })
        .catch((err) => {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
          setAlert(
            <Alert id={"animation"} key={"somekey"} variant={"danger"}>
              Internal server error!
            </Alert>
          );
          setTimeout(() => {
            setAlert(null);
          }, 4000);
          console.error(err);
        });
    });
  };

  let openModal = () => {
    setShowModal(true);
  };

  let handleModalClose = () => {
    setShowModal(false);
  };

  let handleImageChange = async () => {
    request
      .put2(
        request.routes.API_USER_UPDATE,
        {
          id: session.get().userId,
          avatar: imageUrl,
        },
        session.authHeaders()
      )
      .then((res) => {
        //console.log(res);
        handleModalClose();
        session.get().avatar = imageUrl;
        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"success"}>
            Image changed successfully!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
      })
      .catch((err) => {
        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Internal server error!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        console.error(err);
      });
  };

  let handleBioChange = async () => {
    console.log(passwordUser);
    request
      .put2(
        request.routes.API_USER_UPDATE,
        {
          id: session.get().userId,
          bio: Bio,
        },
        session.authHeaders()
      )
      .then((res) => {
        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"success"}>
            Bio changed successfully!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        return;
      })
      .catch((err) => {
        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Internal server error!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        return;
        console.error(err);
      });
  };

  let handlePasswordChange = async () => {
    console.log(passwordUser);
    if (!handlePassword(passwordUser)) {
      setAlert(
        <Alert id={"animation"} key={"somekey"} variant={"danger"}>
          Incorrect username or password!
        </Alert>
      );
      setTimeout(() => {
        setAlert(null);
      }, 4000);
      return;
    }

    if (passwordUser !== confirmPasswordUser) {
      setAlert(
        <Alert id={"animation"} key={"somekey"} variant={"danger"}>
          Passwords do not match!
        </Alert>
      );
      setTimeout(() => {
        setAlert(null);
      }, 4000);
      return;
    }

    request
      .put2(
        request.routes.API_USER_UPDATE,
        {
          id: session.get().userId,
          password: passwordUser,
        },
        session.authHeaders()
      )
      .then((res) => {
        console.log(res);

        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"success"}>
            Password changed successfully!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        return;
        //window.location.reload();
      })
      .catch((err) => {
        setAlert(
          <Alert id={"animation"} key={"somekey"} variant={"danger"}>
            Password changed successfully!
          </Alert>
        );
        setTimeout(() => {
          setAlert(null);
        }, 4000);
        console.error(err);
      });
  };

  let handleUrlKeyPress = (event) => {
    if (event.key === "Enter") {
      handleImageChange();
      event.preventDefault();
    }
  };

  let handleUrlChange = (event) => {
    setImageUrl(event.target.value);
  };

  let handlePassKeyChange = (event) => {
    console.log(passwordUser);
    setPasswordUser(event.target.value);
  };

  let handleConfirmPassKeyChange = (event) => {
    console.log(confirmPasswordUser);
    setConfirmPasswordUser(event.target.value);
  };

  return (
    <React.Fragment>
      <RedirectIfNeeded></RedirectIfNeeded>
      <CommonNavbar authenticated />
      <div id="settings-container">
        <alertMessage>{alert}</alertMessage>
        <Tabs defaultActiveKey="account" className="justify-content-center">
          <Tab eventKey="account" title="Account Settings">
            <div className="tab-custom-container">
              <div id="account-settings-container">
                <div id="account-container">
                  <div id="photo-container" className="justify-content-center">
                    <div id="photo-with-button">
                      <JustUserPicture />
                      <Modal show={showModal} onHide={handleModalClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Please write an image URL</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Group
                            controlId="formchangePicture"
                            id="formmargin"
                          >
                            <Form.Control
                              type="text"
                              placeholder="write image url"
                              onChange={handleUrlChange}
                              onKeyPress={handleUrlKeyPress}
                            />
                          </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            variant="secondary"
                            onClick={handleModalClose}
                          >
                            Cancel
                          </Button>
                          <Button variant="primary" onClick={handleImageChange}>
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                      <Button onClick={openModal} id="settings-button">
                        {" "}
                        Edit{" "}
                      </Button>
                    </div>
                  </div>
                </div>

                <div id="password-container" className="justify-content-center">
                  <div className="password-container-row">
                    <Form.Group controlId="formchangePassword" id="formmargin">
                      <Form.Control
                        type="password"
                        placeholder="New Password"
                        onChange={handlePassKeyChange}
                      />
                    </Form.Group>
                  </div>
                  <div className="password-container-row">
                    <Form.Group>
                      <Form.Control
                        type="password"
                        placeholder="Confirm New Password"
                        onChange={handleConfirmPassKeyChange}
                      />
                    </Form.Group>
                    <Button onClick={handlePasswordChange}>
                      Change password
                    </Button>
                  </div>
                </div>

                <div id="bio-container" className="justify-content-center">
                  <Button id="btnBio" onClick={handleBioChange}>
                    Change Bio
                  </Button>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    className="noSizable"
                    onChange={handleBioKeyChange}
                  >
                    {session.get().bio}
                  </Form.Control>
                </div>
              </div>
            </div>
          </Tab>

          <Tab eventKey="preferences" title="Preferences Settings">
            <div className="tab-custom-container">
              <div id="preferences-settings-container">
                <Form id="preferences-settings-search">
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    onChange={handleSearchChange}
                    onKeyPress={handleSearchKeyPress}
                  />
                  <Button
                    id="preferences-settings-search-button"
                    variant="primary"
                    onClick={handleSearch}
                  >
                    Search
                  </Button>
                </Form>
                {provider.list.length > 0 ? (
                  provider.list.map((providerElem, index) => {
                    return (
                      <ProviderPreference
                        {...providerElem}
                        onChange={() => {
                          provider.list[index].checked =
                            !provider.list[index].checked;
                          forceUpdate();
                        }}
                        checked={providerElem.checked ? true : false}
                      />
                    );
                  })
                ) : (
                  <div id="settings-preferences-loading">Loading...</div>
                )}
                <Pagination id="settings-preferences-pagination">
                  <Pagination.First onClick={handlePaginationFactory(1)} />
                  <Pagination.Prev
                    onClick={handlePaginationFactory(pagination.index - 1)}
                  />

                  {pagination.index > PAGINATION_VISIBLE_COUNT ? (
                    <React.Fragment>
                      <Pagination.Item onClick={handlePaginationFactory(1)}>
                        {1}
                      </Pagination.Item>
                      <Pagination.Ellipsis disabled />
                    </React.Fragment>
                  ) : (
                    ""
                  )}

                  {(() => {
                    let list = [];

                    for (
                      let i = pagination.index - 1;
                      i >= 1 &&
                      i >=
                        pagination.index - (PAGINATION_VISIBLE_COUNT - 1) / 2;
                      --i
                    ) {
                      list.push(
                        <Pagination.Item onClick={handlePaginationFactory(i)}>
                          {i}
                        </Pagination.Item>
                      );
                    }

                    return list;
                  })()}

                  {
                    <Pagination.Item
                      active
                      onClick={handlePaginationFactory(pagination.index)}
                    >
                      {pagination.index}
                    </Pagination.Item>
                  }

                  {(() => {
                    let list = [];

                    for (
                      let i = pagination.index + 1;
                      i <= pagination.count &&
                      i <=
                        pagination.index + (PAGINATION_VISIBLE_COUNT - 1) / 2;
                      ++i
                    ) {
                      list.push(
                        <Pagination.Item onClick={handlePaginationFactory(i)}>
                          {i}
                        </Pagination.Item>
                      );
                    }

                    return list;
                  })()}

                  {Math.max(pagination.index + 1, 3) < pagination.count ? (
                    <React.Fragment>
                      <Pagination.Ellipsis disabled />
                      <Pagination.Item
                        onClick={handlePaginationFactory(pagination.count)}
                      >
                        {pagination.count}
                      </Pagination.Item>
                    </React.Fragment>
                  ) : (
                    ""
                  )}

                  <Pagination.Next
                    onClick={handlePaginationFactory(pagination.index + 1)}
                  />
                  <Pagination.Last
                    onClick={handlePaginationFactory(pagination.count)}
                  />
                </Pagination>

                <Button id="settings-save-btn" onClick={handleSaveSettings}>
                  {" "}
                  Save settings
                </Button>
              </div>
            </div>
          </Tab>
        </Tabs>
      </div>
      <CommonFooter fixed />
    </React.Fragment>
  );
};

export default PageSettings;
