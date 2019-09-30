Component({
  mixins: [],
  data: {
  },
  props: {
    showBottom : true
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    onPopupClose(){
      console.log(this.props.showBottom);
      this.setData({
        showBottom : false
      })
    },
    handleClick(){
      this.setData({
        showBottom : false
      })
    }
  },
});