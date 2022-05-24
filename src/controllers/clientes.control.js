const res = require("express/lib/response");
const clientesctrl = {};
const clientes = require("../models/clientes");

clientesctrl.RederNotesForm = (req, res) => {
  res.render("esp/clientes/nuevo-cliente");
};
clientesctrl.createnewnote = async (req, res) => {
  const { nombre, direccion, tarea, producto } = req.body;
  const Ncliente = new clientes({ nombre, direccion, tarea, producto });
  Ncliente.user=req.user.id;
  await Ncliente.save();
  req.flash('success_msg','cliente agregado');
  res.redirect("/clientes");
};

//busca las notas para su lectura
clientesctrl.RederNote = async (req, res) => {
  //busca las notas por usuario task.find({user:req.user.id})  //.sort({createdAt: 'desc'}) es para ordenar 
  const Lcliente = await clientes.find({user:req.user.id}).sort({createdAt: 'desc'});
  res.render("esp/clientes/clientes-totales", { Lcliente });
};

clientesctrl.RederEdit = async (req, res) => {
  const Ecliente = await clientes.findById(req.params.id);
  if(Ecliente.user !=req.user.id){
  req.flash('error_msg', 'no autorizado');
  return res.redirect('/clientes');
  }
  res.render("esp/clientes/edit-cliente", { Ecliente });
};

clientesctrl.update = async (req, res) => {
  const { nombre, direccion,tarea,producto } = req.body;
  await clientes.findByIdAndUpdate(req.params.id, { nombre, direccion,tarea,producto });
  req.flash('success_msg', 'cliente actualizado');
  res.redirect("/clientes");
};

clientesctrl.deleclientes = async (req, res) => {
  await clientes.findByIdAndDelete(req.params.id);
  req.flash('success_msg', 'cliente eliminado');
  res.redirect("/clientes");
};

module.exports = clientesctrl;