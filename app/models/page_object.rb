class PageObject < ActiveRecord::Base
  include ThriveSmartObjectMethods
  self.caching_default = 'interval[5]' #[in :forever, :page_update, :any_page_update, 'data_update[datetimes]', :never, 'interval[5]']
  
  attr_accessor :full_listings
  
  def after_initialize
    self.full_listings = []
  end
  
  # Override caching information to be on data_update of the data path
  def caching
    @caching = "data_update[#{data_path}]"
  end
  
  
  def fetch_data
    self.full_listings = self.organization.find_data(self.data_path, 
      :include => [:url, :name, :description, :picture],
      :order => [{:publish_at => :desc}])
  end
end
