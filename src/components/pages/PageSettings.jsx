import React, { useState, useEffect, useLayoutEffect } from "react";
import { Button, Tabs, Tab, Form, Pagination, Modal } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";

import CommonNavbar from "../common/CommonNavbar.jsx";
import CommonFooter from "../common/CommonFooter.jsx";
import JustUserPicture from "../common/JustUserPicture.jsx";

import "../../style/settings.scss";
import ProviderPreference from "../utility/ProviderPreference.jsx";

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
  let [sessionInterval, setSessionInterval] = useState(null);
  let [fileUpload, setFileUpload] = useState(null);
  let [, updateState] = React.useState();
  let forceUpdate = React.useCallback(() => updateState({}), []);
  let [showModal, setShowModal] = useState(false);

  //TEMPORAL
  let [imageUrl, setImageUrl] = useState("");

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

  let updateProviders = () => {
    request
      .get(
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
        }
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
        console.error(err);
      });
  };

  let updateProviderCount = () => {
    request
      .get(
        searchQuery.length > 0
          ? request.routes.API_PROVIDER_SEARCH_COUNT
          : request.routes.API_PROVIDER_COUNT,
        {
          query: query,
        }
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
        console.error(err);
      });
  };

  let updateProviderChecked = () => {
    provider.list.map((providerElem, index) => {
      request
        .get(request.routes.API_PREFERENCES_GET, {
          uid: session.get().userId,
          prov_id: providerElem.id,
        })
        .then((res) => {
          let checked = res.data.toString().trim().toLowerCase() === "true";

          provider.list[index].checked = checked; //@SEE
          forceUpdate();
        })
        .catch((err) => {
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
        .put2(request.routes.API_PREFERENCES_UPDATE, {
          uid: session.get().userId,
          prov_id: provider.id,
          status: provider.checked ? true : false,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
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

  let inputProfile = () => {
    console.log("MERGE");
  };

  let handleImageChange = async () => {
    const domain = "gmatei.eu.auth0.com";

    const accessToken = await getAccessTokenSilently({
      audience: `https://gmatei.eu.auth0.com/api/v2/`,
      scope:
        "read:client_grants,create:client_grants,delete:client_grants,update:client_grants,read:users,update:users,delete:user,create:users,read:users_app_metadata,update:users_app_metadata,delete:users_app_metadata,create:users_app_metadata,read:user_custom_blocks,create:user_custom_blocks,delete:user_custom_blocks,create:user_tickets,read:clients,update:clients,delete:clients,create:clients,read:client_keys,update:client_keys ,delete:client_keys,create:client_keys,read:connections,update:connections,delete:connections,create:connections,read:resource_servers,update:resource_servers,delete:resource_servers,create:resource_servers,read:device_credentials,update:device_credentials,delete:device_credentials,create:device_credentials,read:rules,update:rules,delete:rules,create:rules,read:rules_configs,update:rules_configs,delete:rules_configs,read:hooks,update:hookS,delete:hooks,create:hooks,read:actions,update:actions	,delete:actions,create:actions,read:email_provider,update:email_provider,delete:email_provider,create:email_provider,blacklist:tokens,read:stats,read:insights,read:tenant_settings,update:tenant_settings,read:logs,read:logs_users,read:shields,create:shields,update:shields,delete:shields,read:anomaly_blocks,delete:anomaly_blocks	 ,update:triggers,read:triggers,read:grants,delete:grants,read:guardian_factors,update:guardian_factors,read:guardian_enrollments,delete:guardian_enrollments,create:guardian_enrollment_tickets,read:user_idp_tokens,create:passwords_checking_job,delete:passwords_checking_job,read:custom_domains,delete:custom_domains,create:custom_domains,update:custom_domains,read:email_templates,create:email_templates,update:email_templates,read:mfa_policies,update:mfa_policies,read:roles,create:roles	 ,delete:roles,update:roles,read:prompts,update:prompts,read:branding,update:branding,delete:branding,read:log_streams,create:log_streams,delete:log_streams,update:log_streams,create:signing_keys,read:signing_keys,update:signing_keys,read:limits,update:limits,create:role_members,read:role_members,delete:role_members,read:entitlements,read:attack_protection,update:attack_protection,read:organizations,update:organizations,create:organizations,delete:organizations,create:organization_members,read:organization_members,delete:organization_members,create:organization_connections,read:organization_connections,update:organization_connections,delete:organization_connections,create:organization_member_roles,read:organization_member_roles,delete:organization_member_roles,create:organization_invitations,read:organization_invitations,delete:organization_invitations",
    });
    const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

    const metadataResponse = await fetch(userDetailsByIdUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const { user_metadata } = await metadataResponse.json();
    user.user_metadata = user_metadata;
    console.log(user_metadata);
    user.user_metadata = { image: imageUrl };
    if (user.user_metadata.picture) {
      user.picture = imageUrl;
      console.log("MERGE BOSS!");
    }
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

  return (
    <React.Fragment>
      <CommonNavbar authenticated />
      <div id="settings-container">
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
                          <Modal.Title>Modal heading</Modal.Title>
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
                  <Form.Group controlId="formchangePassword" id="formmargin">
                    <Form.Control type="password" placeholder="New Password" />
                  </Form.Group>
                  <Button className="settings-button">Change password</Button>
                </div>

                <div id="bio-container" className="justify-content-center">
                  <Button className="settings-button" id="bio-button">
                    Change Bio
                  </Button>
                  <div id="bio-text-container">{session.get().bio}</div>
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