{
  "id":3,
  "name":"mml_languages",
  "formtabs":[
    {
      "MIGX_id":1,
      "caption":"Language",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":1,
          "field":"language",
          "caption":"Language",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":2,
          "field":"lang_key",
          "caption":"Lang Key",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "configs":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"",
          "default":""
        },
        {
          "MIGX_id":3,
          "field":"lang_dir",
          "caption":"Lang Direction",
          "description":"",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"listbox",
          "validation":"",
          "configs":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"[]",
          "inputOptionValues":"ltr||rtl",
          "default":"ltr"
        }
      ]
    }
  ],
  "contextmenus":"update||remove",
  "actionbuttons":"addItem",
  "columnbuttons":"",
  "filters":"[]",
  "extended":{
    "migx_add":"Add Language",
    "formcaption":"Language",
    "update_win_title":"",
    "win_id":"mml_languages",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"this.handlePositionSelector",
    "filtersperrow":4,
    "packageName":"migxmultilang",
    "classname":"mmlLang",
    "task":"",
    "getlistsort":"pos",
    "getlistsortdir":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"yes",
    "getlistwhere":"",
    "joins":"",
    "cmpmaincaption":"MIGX Languages",
    "cmptabcaption":"Languages",
    "cmptabdescription":"Manage Language-settings here",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":2,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":1,
      "header":"Language",
      "dataIndex":"language",
      "width":20,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":3,
      "header":"Language Key",
      "dataIndex":"lang_key",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    },
    {
      "MIGX_id":4,
      "header":"[[%mml.order_position]]",
      "dataIndex":"pos",
      "width":20,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderPositionSelector",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":"[]"
    }
  ],
  "createdby":1,
  "createdon":"2014-01-06 11:39:28",
  "editedby":1,
  "editedon":"2014-04-13 06:22:03",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"2014-01-06 01:00:00",
  "publishedby":0
}