Deliverables:

- Build an index page for all retailers
    - Should list all retailers and link to individual retailer's show page

- Build a show page for each retailer
    - Should list all snacks and link to snack's show page

- Build a form to create a new retailer (no snacks)



Nested Forms:

On model: `accepts_nested_attributes_for :snacks`
On controller action: `@retailer.snacks.build`
On the form:
```
<%= form_for @retailer do |f| %>
    <%= f.label :name, "New Retailer Name" %>
    <%= f.text_field :name %>
    <%= f.label :year_established %>
    <%= f.number_field :year_established %>

    <h4>Snacks by this retailer</h4>
        <%= f.fields_for :snacks do |s| %>
            <%= s.label :name %>
            <%= s.text_field :name %>
            <%= s.label :calories %>
            <%= s.number_field :calories %>
            <%= s.label :deliciousness %>
            <%= s.select :deliciousness, (1..10) %>
        <% end %>
    <%= f.submit %>
<% end %>
```
Add to strong params
