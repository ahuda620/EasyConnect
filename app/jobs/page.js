import JobSearchPage from "./jobSearchPageClient";

export default async function GetJobSearchData() {
  const [response1, response2] = await Promise.allSettled([
    fetch("http://localhost:3000/jobListings.json"),
    fetch("http://localhost:3000/jobListingDetails.json"),
  ]);

  //Check the status of each response
  if (response1.status === "rejected" || !response1.value.ok) {
    console.error(
      `Failed to fetch job listings. ${
        response1.reason || response1.value.status
      }`
    );
  }
  if (response2.status === "rejected" || !response2.value.ok) {
    console.error(
      `Failed to fetch job listing details. ${
        response2.reason || response2.value.status
      }`
    );
  }

  const jobListings =
    response1.status === "fulfilled" ? await response1.json() : null;
  const jobListingDetails =
    response2.status === "fulfilled" ? await response2.json() : null;

  return (
    <JobSearchPage
      jobListings={jobListings}
      jobListingDetails={jobListingDetails}
    ></JobSearchPage>
  );
}
