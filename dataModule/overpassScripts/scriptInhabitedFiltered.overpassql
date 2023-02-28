// CSV Output
[out:csv(name, ::"lat", ::"lon"; false; "#")]; 
area["ISO3166-1"=LOCATION]->.searchArea;
// gather results
(
  // query part for: “place”
    (node["place"]["name"~"^.+$"]["place"!~"(locality|isolated_dwelling|yes|farm|neighbourhood)"](area.searchArea);)
);
out body;
