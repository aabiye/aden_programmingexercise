import React, { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import Member from "./Member";
import Pagination from "react-bootstrap/Pagination";
import "bootstrap/dist/css/bootstrap.min.css";

const api_key = "61888da502844defa16dd86096aea78f";

async function getMembers(page = 1) {
  let skip = page * 10;
  const response = await fetch(
    `https://clerkapi.azure-api.net/Members/v1/?key=${api_key}&$skip=${skip}&$top=10`
  );
  return response.json();
}

export default function MemberList() {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const { status, data, isFetching } = useQuery(
    ["members", page],
    () => getMembers(page),
    { keepPreviousData: true, staleTime: Infinity }
  );

  const [queryData, setQueryData] = useState([]);

  useEffect(() => {
    if (data?.next) {
      queryClient.prefetchQuery(["members", page + 1], () =>
        getMembers(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const filterMembers = (event) => {
    const value = event.target.value.toLowerCase();

    const filteredMembers = data.results.filter(
      (member) =>
        `${member.officialName}`.toLowerCase().includes(value) ||
        `${member.congresses[0].stateCode}`.toLowerCase().includes(value) ||
        `${member.congresses[0].partyAffiliations[0].name}`
          .toLowerCase()
          .includes(value) ||
        `${member.congresses[0].stateDistrict}`.toLowerCase().includes(value)
    );

    setQueryData(filteredMembers);
  };

  return (
    <div>
      {status === "loading" && <div>Loading data</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <>
          <br />
          <h1 className="memberstitle">ALL MEMBERS</h1>
          <br />
          <Pagination className="pagination justify-content-end">
            <Pagination.Item> Page: {page} </Pagination.Item>
            <Pagination.Prev />
            <Pagination.Item
              className="previous"
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page <= 1}
            >
              Previous
            </Pagination.Item>
            <Pagination.Item
              onClick={() => {
                setPage((old) =>
                  data.pagination.page < data.pagination.count ? old + 1 : old
                );
              }}
              disabled={page >= data.pagination.number_pages}
            >
              Next
            </Pagination.Item>
            <Pagination.Next />
          </Pagination>
          <div>
            <div className="form-group">
              <input
                className="form-control form-control-sm search-box"
                onInput={filterMembers}
                placeholder="Search Members by Name, State, District or Party"
              />
            </div>
            <br />
            <div className="cards-container">
              {queryData.length != 0
                ? queryData.users.map((member) => (
                    <Member key={member._id} member={member} />
                  ))
                : data.results.map((member) => (
                    <Member key={member._id} member={member} />
                  ))}
            </div>
          </div>
        </>
      )}
      {isFetching ? <span> Loading...</span> : null}{" "}
    </div>
  );
}
