import React from "react";
import { Link } from "react-router-dom";
import { put } from "aws-amplify/api";

// svgs
import { ReactComponent as NeedsReview } from "../icons/importantFill.svg";
import { ReactComponent as StarFill } from "../icons/startFill.svg";

const ClientList = ({ clients, getInitials, waitlist, setClients }) => {
  return (
    <ul className="client-list">
      {clients
        .sort((a, b) =>
          `${a.first_name} ${a.last_name}`.localeCompare(
            `${b.first_name} ${b.last_name}`
          )
        )
        .map((client) => (
          <li key={client.id} className="client-item">
            <Link to={`/client/${client.id}`} className="client-link">
              <div className="client-info-container">
                <div className="client-initials">
                  {getInitials(client.first_name, client.last_name)}
                </div>
                <div className="client-info">
                  <div className="client-name">
                    {client.first_name} {client.last_name}
                  </div>
                  <div className="client-phone">
                    {client.general_notes
                      ? client.general_notes.length > 55
                        ? `${client.general_notes.substring(0, 55)}...`
                        : client.general_notes
                      : ""}
                  </div>
                </div>
              </div>
              <div className="client-info-container">
                {client.needs_review ? (
                  <NeedsReview className="svg-icon"></NeedsReview>
                ) : (
                  <NeedsReview className="svg-icon-hidden"></NeedsReview>
                )}
                {client.favorite ? (
                  <StarFill className="svg-icon"></StarFill>
                ) : (
                  <StarFill className="svg-icon-hidden"></StarFill>
                )}
              </div>
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default ClientList;
